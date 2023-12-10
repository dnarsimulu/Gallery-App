// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  const onclickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-container">
      <button className="button" type="button" onClick={onclickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
