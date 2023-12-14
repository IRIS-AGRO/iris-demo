import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue, set } from "firebase/database"

const lagunasRef = ref(db, "Lagunas/")

export const useLagunasStore = create((put) => {
  return {
    lagunas: [],
    fetchLagunas: async () => {
      onValue(lagunasRef, (snapshot) => {
        const data = snapshot.val()

        if (data) {
          const lagunasArray = Object.entries(data).map(
            ([lagunaId, lagunaData]) => {
              const aireadoresArray = lagunaData.Aireadores
                ? Object.entries(lagunaData.Aireadores).map(
                    ([aireadorId, aireadorData]) => ({
                      id: aireadorId,
                      ...aireadorData,
                    })
                  )
                : []

              return {
                id: lagunaId,
                name: lagunaData.name,
                aireadores: aireadoresArray,
                od: lagunaData.od || 0,
                orp: lagunaData.orp || 0,
              }
            }
          )

          put({ lagunas: lagunasArray })
        }
      })
    },
    turnOffAireador: async (lagunaId, fireid) => {
      set(ref(db, `Lagunas/${lagunaId}/Aireadores/${fireid}/encendido/`), false)
      set(ref(db, `Lagunas/${lagunaId}/Aireadores/${fireid}/frecuencia`), 0)
    },

    turnOnAireador: async (lagunaId, fireid) => {
      set(ref(db, `Lagunas/${lagunaId}/Aireadores/${fireid}/encendido/`), true)
    },
  }
})
