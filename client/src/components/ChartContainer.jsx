const style = {
    height: '400px'
}

export const ChartContainer = ({ children }) => {
    return (
        <div className="col-9 ps-5 pe-5 pt-3" style={style}>
            <div className="bg-secondary col-12 p-5 rounded-4">
                {children}
            </div>
        </div>
    );
};