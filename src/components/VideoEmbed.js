const VideoEmbed = ({videoID, startTime}) => {
    const url = `https://youtube.com/embed/${videoID}?start=${startTime}`
    return (
        <>
            <iframe
            src={url}
            title='Embedded Video'
            />
        </>
    )
}

export default VideoEmbed
