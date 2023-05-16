import { Link } from "react-router-dom"
const Goods =()=> {
    const goods = [
        {
            id: 1,
            name: 'IPhone 14 pro max'
        },
        {
            id: 2,
            name: 'Xiaomi pro light 30'
        },
        {
            id: 3,
            name: 'Samsung galaxy s22+'
        }
    ]
    return (
        <div>
            Телефоны
            <div>
            {
                goods.map(item=> (
                    <>
                        <Link to={`/goods/${item.id}/${item.name}`} key={item.id}>
                            {item.name}
                        </Link> 
                        <br/>
                    </>
                ))
            }
            </div>
        </div>
    )
}
export default Goods