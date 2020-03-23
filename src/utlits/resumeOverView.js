const resumeOverView = (overview) => {
    if (!overview) return 'Sorry But the Content Is Not  Available';
    return overview.slice(0, 150) + '...'
}
export default resumeOverView;