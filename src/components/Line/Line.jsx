const triangleDown = {
    width: 0,
    height: 0,
    borderLeft: "50px solid transparent",
    borderRight: "50px solid transparent",
    borderTop: "50px solid #343a40"
};
const Line = () => {
    return (
        <>
            <div className="py-4 bg-dark"></div>
            <div className="d-flex justify-content-center">
                <div style={triangleDown}></div>
            </div>
        </>
    );
};
export default Line;
