export default function Skills (props) {
    if (props.skills) {return (
        <div>
            Skills that u will have:
                {props.skills.map((skill) => <li>{skill}</li>)}
        </div>
    )}
    return ''
}