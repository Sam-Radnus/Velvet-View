import React, { useEffect , useState } from 'react'
function Dashboard() {
  const [userInfo, setUserInfo] = useState({});

  const getData = async () => {
    const data = localStorage.getItem('userInfo');
    if(data) {
      const parsedData = JSON.parse(data);
      setUserInfo(parsedData);
    }
  }
  function kick(){
    localStorage.removeItem('userInfo');
    window.location.href="/";
    
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div className="text-center card-box">
     
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto"><img src="https://img.freepik.com/free-icon/user_318-563642.jpg" height="200" width="200" className="rounded-circle img-thumbnail my-2" alt="profile-image"/></div>
                        <div className="">
                            <h4>{userInfo.firstName+" "+" "+userInfo.lastName}</h4>
                           <p className="text-muted">{userInfo.email}</p> 
                        </div>
                        {/* <ul className="social-links list-inline">
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                        </ul> */}
                        
                        <button type="button" onClick={kick} className="btn mx-2 btn-danger mt-3 btn-rounded waves-effect w-md waves-light">LogOut</button>
                        <div className="mt-4">
                            {/* <div className="row">
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>8471</h4>
                                        <p className="mb-0 text-muted">Wallets Balance</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>8512</h4>
                                        <p className="mb-0 text-muted">Income amounts</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mt-3">
                                        <h4>4751</h4>
                                        <p className="mb-0 text-muted">Total Transactions</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
              
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
