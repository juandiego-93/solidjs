export default function Card(props) {
    return (
        <div 
            class="bg-white p-4 text-center"
            classList={{'rounded-xl': props.rounded, 'shadow-md':!props.flat}}>
            <h2 class="text-2xl ">{props.title}</h2>
            <p class="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, eius! Necessitatibus sed dolorum eos rem.</p>
            <button class="btn "> click me!</button>
        </div>
    )
}