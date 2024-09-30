import './App.css'

function App() {

  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient(to right, rgb(0, 149, 167), rgb(135, 12, 165))', height: '100vh' }}>
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="text-center text-light mt-5"><i className="fa-solid fa-list-check me-3" style={{ color: 'white' }}></i>TODO LIST</h1>
              <div className="bg-light p-3 rounded shadow mt-4 border">

                {/* input-box */}
                <form>
                  <div className="d-flex">
                    <input type="text" placeholder="Enter the Activity" className="form-control" />
                    <button type="button" className="btn btn-primary ms-2"><i className="fa-solid fa-plus fa-lg"></i></button>
                  </div>
                </form>
              </div>


              {/* task card */}
              <div className="bg-light p-3 rounded shadow mt-4 border">
                <div className='d-flex align-items-center'>
                  <h6 className='font-semibold text-xl'>1.</h6>
                  <h6 className='font-semibold text-xl ms-3'>walk</h6>


                  {/* button for incomplete task */}
                  <button className='btn ms-auto fs-4'><i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i></button>

                  {/* button for complete task */}
                  <button className='btn  ms-auto fs-4'><i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i></button>

                  <button className='btn ms-1 fs-4'><i className="fa-solid fa-square-xmark" style={{ color: 'red' }}></i></button>
                </div>
              </div>





            </div>
          </div>
        </div >
      </div>







    </>
  )
}

export default App



