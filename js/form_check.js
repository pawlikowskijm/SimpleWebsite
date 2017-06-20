//wyœwietla na ekranie komunikat o wymaganym polu
function showWarrningReq (mesg)
{
	alert('pole " ' + mesg + ' " jest wymagane');
	return true;
}

//zwraca wartoœæ prawda jesli przekazany argument to cyfra
function isDigit (c)
{
	return ((c >= "0") && (c <= "9"));
}

//zwraca wartosc prawda jesli przekazany argument to pusty lancuch
function isEmpty (st)
{
	if (st.length == 0)
	{
		return true;
	}
	else
		return false;
}

//zwraca wartosc prawda jesli przekazany argument to ciag bialych znakow
function isWhiteSpace (st)
{
	var ws = " \t \n \r ";
	for (i=0; i < st.length; i++)
	{
		var c = st.charAt(i);
		if (ws.indexOf(c) == -1)
			return false;
	}
	return true;
}

//zwraca wartosc prawda jesli przekazany argument to niepusty lancuch
//ktory nie zawiera tylko bialych znakow
function checkString (st, mesg)
{
	if ( isWhiteSpace(st) || isEmpty(st) )
	{
		showWarrningReq(mesg);
		return false;
	}
	else
		return true;
}

//zwraca wartosc prawda jesli przekazany argument to poprawny kod pocztowy
function checkPostalCode (st)
{
	var s = st;
	if (s.length == 6)
	{
		if ( (s.charAt(2)) == "-")
		{
			if ( isDigit(s.charAt(0) ) && isDigit( s.charAt(1) ) &&  
				isDigit( s.charAt(3) ) && isDigit( s.charAt(4) ) && 
				isDigit( s.charAt(5) ) )
			{
				return true;
			}
			else
				alert ("Z³y kod pocztowy");
		}
		else
			alert ("Z³y kod pocztowy");
	}
	else
		alert ("Z³y kod pocztowy");
}

//zwraca wartosc prawda jesli przekazany argument to poprawny adres email
function checkEmail (st)
{
	var email = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
	if (email.test(st))
		return true;
	else
		alert("Podaj w³aœciwy e-mail");
}

//funkcja wywolujaca odpowiednie metody dla kazdego sprawdzanego pola formularza
function validate (form)
{
	return (
	checkString (form.elements["f_imie"].value, 'imiê') &&
	checkString (form.elements["f_nazwisko"].value, 'nazwisko') &&
	checkEmail (form.elements["f_email"].value) &&
	checkPostalCode (form.elements["f_kod_pocztowy"].value) &&
	checkString (form.elements["f_ulica"].value, 'ulica/osiedle') &&
	checkString (form.elements["f_miasto"].value, 'miasto') )
}