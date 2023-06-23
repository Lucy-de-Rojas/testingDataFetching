
import { DataModel } from "@/dataModel"
import React from "react";




const DataDisplay:React.FC<DataModel[]> = ({dataToDisplay}) => {




        return (<div>
<h1> Data Display</h1>

{dataToDisplay.map((item:DataModel) => {
        return <p key={item.id}>{item.name}</p>
})}

        </div>);
}


export default DataDisplay;