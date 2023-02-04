import Button from 'react-bootstrap/Button';

const Btn = (props) => {
    const {text} = props;
    return(
        <Button variant = "success" type="submit">{text}</Button>
    )
}

export default Btn;