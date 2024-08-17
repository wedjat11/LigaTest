import { useFetchGames } from "@/hooks/useFetchGames";

export function BasicCard({date, local, visitante}){
  
    return(
        <div className="border border-grayBorder w-1/5 m-4">
            {/* <div>><p></p></div> */}
            <div className="bg-superGray">
                <p className="font-bold"> {date}</p>
            </div>
            <div className="test">
                <p>{local} vs {visitante}</p>
            </div>
        </div>
    )
}