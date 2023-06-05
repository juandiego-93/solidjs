export default function Card(props) {
    return (
        <div 
            class="bg-white p-4 text-center"
            classList={{'rounded-xl': props.rounded, 'shadow-md':!props.flat}}>
            {props.children}
        </div>
    )
}