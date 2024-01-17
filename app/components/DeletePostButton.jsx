'use client'
import { useRouter } from "next/navigation"

export default function DeletePostButton({postID}){
    const router = useRouter()

    async function handleClick(){
        try{
            await fetch(`/api/post/${postID}`,{
                method: 'DELETE',
            })
            router.refresh()
        }
        catch(error){
            console.error(error)
        }
    }
    return(
        <button onClick={handleClick}>Delete Post</button>
    )
}