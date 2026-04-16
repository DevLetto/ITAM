import { useNavigate } from "react-router-dom"
import { useState, useCallback } from "react"


function ViewAssets(){

    const navigate = useNavigate()

    const [list, setList] = useState([]);
    const [type, setType] = useState("")
    const [status, setStatus] = useState("")
    const [showDetails, setShowDetails] = useState(false)

    const [filters, setFilters] = useState({
        type: "",
        status: "",
    })

    const searchHistory = useCallback(
        async (filtersOverride = {}) => {
            try{
                const currentFilters = { ...filters, ...filtersOverride}

                const queryParams = new URLSearchParams();

                if(currentFilters.type){
                    queryParams.append("type", filters.type);
                }

                if(currentFilters.status){
                    queryParams.append("status", filters.status)
                }

                const url = `http://localhost:8080/assets?${queryParams.toString()}`

                const response = await fetch(url)

                if(!response.ok){
                    console.error("Error at loading the assets", response.status);
                    setList([]);
                    return;
                }

                const data = await response.json();
                setList(Array.isArray(data) ? data : []);

            }catch(error){
                console.error("Error on executing requisition", error)
                setList([]);
            }
        },
        [filters]
    )
    

    return(
        <div className="w-screen h-screen bg-fundo flex gap-5 items-center flex-col "></div>
    )
}

export default ViewAssets