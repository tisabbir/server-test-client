import { useLoaderData } from "react-router-dom";


const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <p> {phone.name} </p>
            <img src={phone.image} />

        </div>
    );
};

export default Phone;