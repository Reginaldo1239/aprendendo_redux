export default class Validation{

    static preventString(event){       
        let reg  = new RegExp(/[0-9]{1}/,'g');
        if(!reg.test(event.key)){
            event.preventDefault();
        }
    }


static formatValueMoney(value){
    var v = value.replace(/\D/g,''); 
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	value = v;
   return value;

} 
}