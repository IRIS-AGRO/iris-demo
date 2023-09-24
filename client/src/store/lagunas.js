import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue } from "firebase/database"

const lagunasRef = ref(db, "Lagunas/")

export const useLagunasStore = create((put, get) => {
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
  }
})
