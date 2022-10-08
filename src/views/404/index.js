import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/user');
    }
    return (
        <div>
            <div>你来到了没有知识的荒原</div>
            <a href="/" onClick={onClick} >返回首页</a>
        </div>
    )
}
export default NotFound 