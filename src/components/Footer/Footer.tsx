export const Footer = () => {
    const date = new Date();
    return (
        <div className="footer text-center">
            <p>RCN Soft - Copyright {date.getFullYear()}</p>
        </div>
    );
};
