export default function TodoList(props){
    return(
        <ul className="text-center">
            {props.list.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    );
}