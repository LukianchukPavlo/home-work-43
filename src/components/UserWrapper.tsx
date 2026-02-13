import { useParams } from "react-router-dom"
import User from "./User/User"

export default function UserWrapper() {
  const { id } = useParams()

  const userId = Number(id)

  if (isNaN(userId)) {
    return <h1>User not found</h1>
  }

  return <User userId={userId} />
}