import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Error(){
    const navigate = useNavigate()
    useEffect(() => {
        document.addEventListener('popstate', (e) => 
            navigate('/')
        )
        return () => {
            document.removeEventListener('popstate', (e) =>  navigate('/'))
        }
    },[])

    return(<h1>Error 404</h1>)
}

