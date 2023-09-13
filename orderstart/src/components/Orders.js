import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FlatwareIcon from '@mui/icons-material/Flatware';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import Ordersdata from './data';

const OrderStat = ({ title, value, percentage, amount }) => {
  let iconComponent = null;
  let trendIcon = null;

  if (title === 'Orders') {
    iconComponent = <ShoppingCartIcon />;
    trendIcon = <ArrowUpwardIcon style={{color:"green"}} />;
  } else if (title === 'Dine in') {
    iconComponent =<FlatwareIcon style={{backgroundColor:"red",width:"30px", height:"30px",color: "white",fontWeight: "bold",borderRadius:"50%",textAlign: "center"}}/>
    trendIcon = <ArrowDownwardIcon style={{color:"red"}}/>;
  } else if (title === 'Take Away') {
    iconComponent =  <FastfoodIcon />;
    trendIcon = <ArrowUpwardIcon style={{color:"green"}}/>;
  } else if (title === 'Revenue') {
    trendIcon = <ArrowDownwardIcon  style={{color:"red"}}/>;
  }
  return (
    <div className='container'>
      {/* <div className='row d-flex'> */}
        {/* <div className='col-3' id='info'> */}
          <div className="col-3 order-info">
            <div className='d-flex align-items-center'>
              <h3 className="stat-title">{title}</h3>
              {percentage && <p className="stat-percentage mx-auto">{trendIcon}{percentage}</p>}
            </div>
            {amount && (
              <div className='d-flex align-items-center'>
                <span className='arrow'><ArrowOutwardIcon /></span>
                <p className="stat-amount mx-2">{amount}</p>
              </div>
            )}
            {title !== 'Revenue' && (
              <div className='d-flex align-items-center number'>
                <p className='icon mx-2'>
                  {iconComponent}
                </p>
                <p className="stat-value mx-2">{value}</p>
              </div>
            )}
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default OrderStat;