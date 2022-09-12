import React from 'react';
import imagen from './img/imagen.png'

export default function Cards() {
    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-12 col-md-2 gx-4 ">
                <div className="card border border-0">
                <div className="card-header border border-0 rounded-0 p-0 d-flex"><img src={imagen} style={{width: "100%", height:"200px"}}/></div>
                    <div className="card-body  border px-0">
                        <h5 className="card-title text-center fs-4 text text-dark">"Card Title"</h5>
                        <p className="card-text text-center py-2 px-4"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, impedit
                            praesentium, commodi officia sit, molestiae nesciunt saepe accusantium officiis.</small></p>
                    </div>
                    <div className="card-footer border mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-2 gx-4 ">
                <div className="card border border-0">
                <div className="card-header border border-0 rounded-0 p-0 d-flex"><img src={imagen} style={{width: "100%", height:"200px"}}/></div>
                    <div className="card-body  border px-0">
                        <h5 className="card-title text-center fs-4 text text-dark">"Card Title"</h5>
                        <p className="card-text text-center py-2 px-4"><small>Consectetur adipisicing elit. A, impedit
                            praesentium, commodi officia sit, molestiae nesciunt saepe accusantium officiis. consectetur adipisicing elit.</small></p>
                    </div>
                    <div className="card-footer border mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                </div>
            </div>



            <div className="col-12 col-md-2 gx-4 ">
                <div className="card border border-0">
                <div className="card-header border border-0 rounded-0 p-0 d-flex"><img src={imagen} style={{width: "100%", height:"200px"}}/></div>
                    <div className="card-body  border px-0">
                        <h5 className="card-title text-center fs-4 text text-dark">"Card Title"</h5>
                        <p className="card-text text-center py-2 px-4"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, impedit
                            praesentium, commodi officia sit. Lorem ipsum dolor sit amet.</small></p>
                    </div>
                    <div className="card-footer border mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-2 gx-4 ">
                <div className="card border border-0">
                    <div className="card-header border border-0 rounded-0 p-0 d-flex"><img src={imagen} style={{width: "100%", height:"200px"}}/></div>
                    <div className="card-body  border px-0">
                        <h5 className="card-title text-center fs-4 text text-dark">"Card Title"</h5>
                        <p className="card-text text-center py-2 px-4"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nesciunt saepe accusantium officiis. Lorem ipsum dolor sit amet.</small></p>
                    </div>
                    <div className="card-footer border mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
// style="height:200px; width:100%; background-color: lightgray;"