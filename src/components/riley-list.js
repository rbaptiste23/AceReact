import React from 'react'
import AceLogo from '../images/ace.jpg'

export default class RileyList extends React.Component {

   constructor(props){
       super(props)

       this.state = {
           prodList:  ["Ace", "Cash", "Express"],
           loanTitle: "LOANS",
           loanTitleSpanish: "PRESTAMOS",
           complianceFix: "SEE COMPLIANCE FIXTURE",
           complianceFixSpanish: "CONSULTE EL CRONOGRAMA DE CUMPLIMENTO",           
           moneyOrderTitle: "MONEY ORDERS",
           moneyOrderTitleSpanish: "GIROS DE DINERO",
           moneyOrderAmount: ["$0 - $249.99", "$250 - $499.99", "$500 - $1000.00"],
           moneyOrderCost: ["$0.99", "$1.79","$2.79"],
           billPaymentsTitle: "BILL PAYMENTS",
           billPaymentsTitleSpanish: "PAGO DE CUENTAS",
           billPaymentTypes:"WATER, GAS, ELECTRICITY, PHONE CREDIT",
           billPaymentTypesSpanish: "AGUA, GAS, ELECTRICIDAD, TELEFONO, CREDITO",
           moneyGram: "MONEYGRAM",
           wireTransfers: "WIRE TRANSFERS",
           checkCashing: "CHECK CASHING",
           checkCashingSpanish: "CAMBIO DE CHEQUES",

           checkCashingType: ["Computer Payroll","Handwritten Payroll","Government (Non-tax)",
                              "Government Issued Tax","Personal / Two Party Personal",
                              "Business Checks","All Other Checks & Money Orders","Processing Fee",
                              "Minimum Charge per Item","New Customer Fee"],


           checkCashingTypeSpanish: ["NOMINA DE COMPUTADORA","NOMINA ESCRITA A MANO","CHEQUES FISCALES DEL GOBIERNO",
                                     "FISCALES NO GOBIERNO","PERSONAL / CONJUNTO","CHEQUES A UN NEGOCIO",
                                     "OTROS CHEQUES O GIROS DE DINERO","CARGO DE PROCESAMIENTO",
                                     "CARGO MINIMO POR ARTICULO","CARGO PARA NUEVOS CLIENTES"],

           checkCashingChargePercent: ["2.5%","4%","3%","4.5%","5%","10%","4%","6%","99¢","$2.99","$3"],


           aceFlareAccountOne: "ACE FLARE  ACCOUNT",
           aceFlareAccountTwo: "BY METABANK BANK ACCOUNT",

           aceFlareAppProcessingFee: "Application Processing Fee",
           aceFlareAppProcessingFeeSpanish: "CARGO POR PROCESAMIENTO DE SOLICITUD",
           aceFlareAmount: "$3",

           aceWithdrawTitle: "Flare Withdrawal Pricing",
           aceWithdrawTitleSpanish: "COSTO DE RETIRO DE CUENTA FLARE",
           aceBox1: "With Qualifying Direct Deposit",
           aceBox2: "Without Qualifying Direct Deposit",
           flarePricingTitle: ["Up to $400.00 Hasta $400","$400.01 - $1000.00","$1000.01 & Above $1000.01 y Mas"],
           flarePriceOne: ["$0","2%","2.75%"],
           flarePriceTwo: ["$3","2%","2.75%"],
           addMoneyTitle: "Add Money",
           addMoneyTitleSpanish: "AGREGAR DINERO",
           addMoneyWithDDAmount: "$3.00",
           addMoneyWithOutDDAmount: "$3.95"

       }

   }

componentDidMount(){

}

   render(){
       return (
        
         <div className ="wrapper">    
           {/* Row 1 */}
           <div className = "row-one-span-one-a"> </div>                           
         
            <div className = "row-one-span-one-b">         
              <img src={AceLogo} alt="Ace logo"/><br/><br/>
            </div>
          
            <div className = "row-one-span-one-c"></div> 


            {/*/ Row 2 *******************************************************************/}

            {/* Row 2 A  */}
            <div className="row-two-span-one-a-one">
              <h2 className="title-Headings title-Margin">{this.state.loanTitle}</h2>
              <h3 className="title-Headings sub-title-margin">{this.state.loanTitleSpanish}</h3>

              <h2 className="title-Margin">{this.state.complianceFix}</h2>
              <h3>{this.state.complianceFixSpanish}</h3>

              


              <div className="row-two-span-one-a-two">
                 <h2 className="title-Headings title-Margin">{this.state.moneyOrderTitle}</h2>
                 <h3 className="title-Headings sub-title-margin">{this.state.moneyOrderTitleSpanish}</h3>


                {this.state.moneyOrderAmount.map((m,idx)=> {
                    return (
                        <div  className="money-cost" >
                        <h3 className="money">{m}</h3>
                        { <h3 className="cost">{this.state.moneyOrderCost[idx]}</h3> }
                        </div>
                    )})}

      
                </div>



           
            <div className = "row-two-span-one-a-three">
                <h2 className="title-Headings title-Margin">{this.state.billPaymentsTitle}</h2>   
                <h3 className="title-Headings title-Margin">{this.state.billPaymentsTitleSpanish}</h3>
                
                <h3 className="bp-types">{this.state.billPaymentTypes}</h3>
                <h5>{this.state.billPaymentTypesSpanish}</h5>
            </div>                   



             
            <div className = "row-two-span-one-a-four">

              <h2 className="title-Headings title-Margin">{this.state.moneyGram}</h2>   
              <h3>{this.state.wireTransfers}</h3>
                       
            </div>                    
    

                {/* Row 2 A */}
            </div>  


            {/* Row 2 B */}

            <div className = "row-two-span-one-b">
               <h2 className="title-Headings title-Margin">{this.state.checkCashing}</h2>
               <h3 className="title-Headings sub-title-margin">{this.state.checkCashingSpanish}</h3>


               {

                this.state.checkCashingType.map((m,idx)=>{
                  return (

                    <div className="check-cash-options">
                      <h4 className="payroll-margin">{m}</h4>
                      <h4 className="check-cash-percent">{this.state.checkCashingChargePercent[idx]}</h4>
                      <h4 className="check-cash-spanish">{this.state.checkCashingTypeSpanish[idx]}</h4>
                  
                    </div>

                  )
                }) 
                
                }               

                {/* Row 2 B */}
            </div>



             {/* Row 2 C  */}

              <div className = "row-two-span-one-c">

              <h2 className="title-Headings title-Margin">{this.state.aceFlareAccountOne}</h2>
              <h2 className="title-Headings title-Margin">{this.state.aceFlareAccountTwo}</h2>

              <h2 className="payroll-margin-c">{this.state.aceFlareAppProcessingFee}</h2>
              <h4 className="check-cash-percent-c">{this.state.aceFlareAmount}</h4>
              <h5 className="check-cash-spanish-c">{this.state.aceFlareAppProcessingFeeSpanish}</h5>


              <h2 className="payroll-margin-d">{this.state.aceWithdrawTitle}</h2>
          
              <h5 className="check-cash-spanish-d">{this.state.aceBox1}</h5>
              <h5 className="check-cash-line-d">{this.state.aceBox2}</h5>
              <h5 className="check-cash-percent-d">{this.state.aceWithdrawTitleSpanish}</h5>
              <div className="check-cash-line-e"></div>


              {this.state.flarePricingTitle.map((p,idx)=>{

                return (
                <div className="f-price-div">
                 <h4 className="ftitle1">{p}</h4>
                 <h4 className="ftitle2">{this.state.flarePriceOne[idx]}</h4>
                 <h4 className="price-two">{this.state.flarePriceTwo[idx]}</h4>
                 </div>
                )

              })}


              <h2 className="add-money">{this.state.addMoneyTitle}</h2>            
              <h5 className="add-money-3">{this.state.addMoneyWithDDAmount}</h5>
              <h5 className="add-money-3">{this.state.addMoneyWithOutDDAmount}</h5>
              <h5 className="add-money-2">{this.state.addMoneyTitleSpanish}</h5>

              <div className="add-money-line"></div>



            {/* Update changes Here  */}


              <h2 className="title-Headings title-Margin">{this.state.aceFlareAccountOne}</h2>
              <h2 className="title-Headings title-Margin">{this.state.aceFlareAccountTwo}</h2>

              <h2 className="payroll-margin-c">{this.state.aceFlareAppProcessingFee}</h2>
              <h4 className="check-cash-percent-c">{this.state.aceFlareAmount}</h4>
              <h5 className="check-cash-spanish-c">{this.state.aceFlareAppProcessingFeeSpanish}</h5>


              <h2 className="payroll-margin-d">{this.state.aceWithdrawTitle}</h2>
          
              <h5 className="check-cash-spanish-d">{this.state.aceBox1}</h5>
              <h5 className="check-cash-line-d">{this.state.aceBox2}</h5>
              <h5 className="check-cash-percent-d">{this.state.aceWithdrawTitleSpanish}</h5>
              <div className="check-cash-line-e"></div>


              {this.state.flarePricingTitle.map((p,idx)=>{

                return (
                <div className="f-price-div">
                 <h4 className="ftitle1">{p}</h4>
                 <h4 className="ftitle2">{this.state.flarePriceOne[idx]}</h4>
                 <h4 className="price-two">{this.state.flarePriceTwo[idx]}</h4>
                 </div>
                )

              })}


              <h2 className="add-money">{this.state.addMoneyTitle}</h2>            
              <h5 className="add-money-3">{this.state.addMoneyWithDDAmount}</h5>
              <h5 className="add-money-3">{this.state.addMoneyWithOutDDAmount}</h5>
              <h5 className="add-money-2">{this.state.addMoneyTitleSpanish}</h5>

              <div className="add-money-line"></div>


            </div>



              {/* Row 2 C  */}



            {/* Wrapper */}


</div>)}}