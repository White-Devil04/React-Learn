function PrintBtn() {
    const handlePrint = () => {
        window.print();
    };
  return (
    <div>
        <button onClick={handlePrint}>Print</button>
    </div>
  )
}

export default PrintBtn;