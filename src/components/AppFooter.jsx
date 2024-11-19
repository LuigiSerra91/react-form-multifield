export default function AppHeader() {
    const copyright = <h3 className="bg-primary text-center p-2">
        <i className="bi bi-c-circle"></i> Made by Luigi Serra
        <i className="bi bi-suit-heart-fill"></i>
    
     </h3>

    return (
        <footer>
            {copyright}
        </footer>
        
    )
}