import React, { useState, useEffect } from 'react';
import '../style/studentprofile.css';
import { useParams } from 'react-router-dom';
import { Paper, Box, CircularProgress } from '@mui/material';

function Jobprofile() {
  const { name, id } = useParams();
  console.log(id);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const [company, setCompany] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch(`https://back-end-production-3140.up.railway.app/api/jobprofile/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setCompany(data);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  if (loading) return (<div style={{
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "5vh 5vw",
  }}>
    <Paper sx={{ py: 1, px: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '73vh' }} className="container">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Paper>
  </div>);

  return (
    <div className="container">
      <div className="main-body">

        <div className="row gutters-sm">

          <div className="card mb-3">
            <div className="card-body" style={{ width: '100%' }}>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Company Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {name?.toUpperCase()}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Profile Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.company_name?.toUpperCase()}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Offer Type</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.offer_type?.toUpperCase()}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Location</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.location?.toUpperCase()}
                </div>
              </div>
              <hr />

              {company?.open_for.toUpperCase() === 'BTECH' &&
                <>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">UG Criteria</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company?.cpi_criteria}
                    </div>
                  </div>

                  <hr />
                </>
              }




              {(company?.open_for.toUpperCase() === 'MTECH' || company?.open_for.toUpperCase() === 'MSC') &&
                <>
                  <div className="row">

                    <div className="col-sm-3">
                      <h6 className="mb-0">PG Criteria</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company?.cpi_criteria}
                    </div>

                  </div>
                  <hr />
                </>
              }



              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Company Category</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.ctc > 10 ? "A1" : "A"}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Open For</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.open_for?.toUpperCase()}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Company Type</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.offer_type?.toUpperCase()}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Available Roles</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.company_name?.toUpperCase()}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Description</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.job_description}
                </div>
              </div>
              <hr />

              {company?.open_for.toUpperCase() === 'BTECH' &&
                <>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">UG Package(LPA)</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company?.ctc}
                    </div>
                  </div>
                  <hr />
                </>
              }



              {(company?.open_for === 'MTECH' || company?.open_for === 'MSC') &&
                <>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">PG Package(LPA)</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company?.ctc}
                    </div>
                  </div>
                  <hr />
                </>
              }


              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Stipend</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {company?.stipend}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Registration Start Date</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {new Date(company?.registration_start_date).toLocaleString('en-GB', { ...options, timeZone: 'UTC' })}
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Registration Start End</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {new Date(company?.registration_end_date).toLocaleString('en-GB', { ...options, timeZone: 'UTC' })}
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
    // </div>
  );
};

export default Jobprofile;