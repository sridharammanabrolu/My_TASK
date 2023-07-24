
export default function Ippopay_Task2(){
    let a = [1,3,9,7,4,1,8,1]

    let temporaryValue1 = 0
    let i=0
    for(i=0; i<a.length/2; i++){
        temporaryValue1 += a[i]
    }
    
    let temporaryValue2 = 0
    
    for(i=a.length/2; i<a.length; i++){
        temporaryValue2 += a[i]
    }
    
    console.log("temporaryValue",temporaryValue1 - temporaryValue2)

    return (
        <>
        <h3>Difference data is ::::::: {temporaryValue1 - temporaryValue2}</h3>
        </>
    )
}