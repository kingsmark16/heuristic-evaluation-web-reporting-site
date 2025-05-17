const PdfCard = () => {
  const handleViewConcina = () => {
    window.open('/CONCINA-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf', '_blank');
  };
  const handleViewOraller = () => {
    window.open('/ORALLER-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf', '_blank');
  };
  const handleViewRadores = () => {
    window.open('/ORALLER-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf', '_blank');
  };
  const handleViewOnsay = () => {
    window.open('/ORALLER-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf', '_blank');
  };
  const handleViewBermejo = () => {
    window.open('/ORALLER-Heuristic_Evaluation_Workbook_-_Nielsen_Norman_Group.pdf', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 py-8">
        <div className="card w-70 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">1</span>Heuristic Evaluation Workbook</h2>
                <p>Mark Angel P. Concina</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={handleViewConcina}>View</button>
                </div>
            </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">2</span>Heuristic Evaluation Workbook</h2>
                <p>Gerald B. Oraller</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={handleViewOraller}>View</button>
                </div>
            </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">3</span>Heuristic Evaluation Workbook</h2>
                <p>Dino S. Radores Jr.</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={handleViewRadores}>View</button>
                </div>
            </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">4</span>Heuristic Evaluation Workbook</h2>
                <p>Alwin Y. Onsay Jr.</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={handleViewOnsay}>View</button>
                </div>
            </div>
        </div>
        <div className="card w-70 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><span className="bg-base-content rounded-full w-6 h-6 text-center text-base-300">5</span>Heuristic Evaluation Workbook</h2>
                <p>King David P. Bermejo</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={handleViewBermejo}>View</button>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default PdfCard;
