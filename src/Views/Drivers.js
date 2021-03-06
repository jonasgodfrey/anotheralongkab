import React, { Component } from 'react'

export default class Drivers extends Component {

  componentDidMount (){
    const script = document.createElement("script");
    script.src = 'js/content.js';
    script.async = true;
 
    document.body.appendChild(script);
  }


    render() {
        return (
           <div>
  <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Drivers</h1>
        </div>{/* /.col */}
        
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">  
          <div className="card card-blue">
            <div className="card-header">
              <h3 className="card-title">Driver Details</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Driver Id</th>
                    <th>Username</th>
                    <th>Current Routes(s)</th>
                    <th>Destination</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td><span className="badge bg-success">online</span></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 5.0
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td><span className="badge bg-danger">offline</span></td>
                  </tr>
                </tbody></table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  <section className="content">
    <div className="container-fluid">
      {/* SELECT2 EXAMPLE */}
      <div className="card card-danger">
        <div className="card-header">
          <h3 className="card-title">Drivers Registration</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <legend>Personal Info</legend><hr />
          <form>                
            <div className="row">
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>State of Residence</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" placeholder="Enter ..." >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                </div>
              </div>
            </div>
            <legend>Vehicular Info</legend><hr />
            <div className="row">
           
              <div className="col-sm-6">
                {/* text input */}
                <div className="form-group">
                  <label>Vehicle Model</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-6">
                {/* text input */}
                <div className="form-group">
                  <label>Vehicle Year</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Plate Number</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Vehicle Color</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
              <div className="col-sm-4">
                {/* text input */}
                <div className="form-group">
                  <label>Driver License</label>
                  <input type="text" className="form-control" placeholder="Enter ..." />
                </div>
              </div>
            </div>
                       
          </form>
        </div>
        {/* /.card-body */}
        <div className="card-footer card-footer-dan">
          <button type="button" className="btn btn-tool btn-primary" data-card-widget="collapse"><i className="fas fa-minus" /></button>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
</div>
</div>
        )
    }
}
