import { useParams } from "react-router-dom"
import User from "./User"

export default function UserWrapper() {
  const { id } = useParams()

  const userId = Number(id)

  if (!userId) return <h1> User not found </h1>

  return <User userId={userId} />
}