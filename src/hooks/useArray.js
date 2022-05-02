import { useState } from "react"

export const useArray = (arrDefault) => {
  const [arr, setArr] = useState(arrDefault)

  return {
    state: arr,
    add(newItem) {
      setArr([...arr, { ...newItem, _id: Date.now().toString() }])
    },
    update(updatedItem, idField = "_id") {
      setArr(
        arr.map((item) =>
          item[idField] === updatedItem[idField] ? updatedItem : item
        )
      )
    },
    delete(id, idField = "_id") {
      setArr(arr.filter((item) => item[idField] !== id))
    },
  }
}
