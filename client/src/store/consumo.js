import { create } from "zustand"
import { db } from "../firebase/config"
import { ref, onValue } from "firebase/database"

export const useConsumoStore = create((put) => {
  return {
    consumo: 0,
    fetchConsumo: async () => {
      const consumoRef = ref(db, "Consumo")
      onValue(consumoRef, (snapshot) => {
        const data = snapshot.val()
        const consumoLimitado = Math.min(data, 100)
        put({ consumo: consumoLimitado })
      })
    },
  }
})