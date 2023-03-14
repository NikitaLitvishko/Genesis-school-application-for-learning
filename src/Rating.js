export default function Rating (props) {
    const rating = props.rating;
    

    return (
        <ul className="rating">
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star-half"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
        </ul>
    )
}
