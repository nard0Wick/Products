
export function Card({ item }){
    //console.log(item);
    return (
        <div>
            <h1>{item.name + ' ' + item.last_name}</h1>
        </div>
    );
}

