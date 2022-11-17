import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, clickThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ''

  return (
    <li>
      <button type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
