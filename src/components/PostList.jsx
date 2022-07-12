export default function PostList(props){
  const {cb, name} = props

  return <p onClick={cb}>{name}</p>
}