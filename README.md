# CBKM
## Analytics API 
### Introduction
- Here  you can set:-
  - visitors count 
  - Access count 
  - Or any other 
##### Stamp in IST zone (Asia/Kolkata) in ISO will set Automatically


## Model
### action:-
You have to set action it is required and it must define 
what acction has been performed 

### name:-
This is not mandetory but it is given to more specify a action performed 

## APIs

This is the root link 
`https://cbkm-analytics-services.herokuapp.com`

To check you are Eligible to use this services
get:- `https://cbkm-analytics-services.herokuapp.com/analytics/alive`

if response is :-
`{"alive":true}`
Then you can use thess services

> Note:- succes is always send in response with any API
> It can be true or false 
> if false ,
>  - Please read complete  documentation 
>
> if true ,
>  - Your data has been recorded
>
## Set Data
post:- `https://cbkm-analytics-services.herokuapp.com/analytics/`
request:-

> {
> action:'My-Action'//mandatory
> name:'My-name'//compulsory
> }
> 
response :-`{success:true}` or `{success:false}`

## get Data
get:- `https://cbkm-analytics-services.herokuapp.com/analytics/`
response :-
```
{
success:true
data:[ 
		{
			_id:ObjectID,
			action:'My-Action'
			name:'My-Name'
		},
		.....
	]
}
```
or `{success:false}`

## Get Data by action

get:- `https://cbkm-analytics-services.herokuapp.com/analytics/action/My-Action`

response :-
```
{
success:true
data:[ 
		{
			_id:ObjectID,
			action:'My-Action'
			name:'My-Name'
		},
		.....
	]
}
```
or `{success:false}`


## Get  action count

get:- `https://cbkm-analytics-services.herokuapp.com/analytics/actioncount/My-Action`

response :-
```
{
success:true
data:15
}
```
or `{success:false}`


## Get  action Delete

get:- `https://cbkm-analytics-services.herokuapp.com/analytics/actiondelete/My-Action`

response :-
``{success:true}``or `{success:false}`


## Some API you may use  
Similar to above 
get:- `https://cbkm-analytics-services.herokuapp.com/analytics/name/My-Name`

get:- `https://cbkm-analytics-services.herokuapp.com/analytics/namecount/My-name`

get:- `https://cbkm-analytics-services.herokuapp.com/analytics/namedelete/My-Name`

## Some Specific APIs 

post:- `https://cbkm-analytics-services.herokuapp.com/analytics/specific`
request:-
```
{
	action:'my-Action'//optional
	name:'my-Name'//optional
	stamp:'2019-08-12T04:10:00.320Z'//ISO
}
```
response :-
```
{
success:true
data:[ 
		{
			_id:ObjectID,
			action:'My-Action'
			name:'My-Name'
		},
		.....
	]
}
```
or `{success:false}`

### Smilar Specific route

post:- `https://cbkm-analytics-services.herokuapp.com/analytics/specificcount`

post:- `https://cbkm-analytics-services.herokuapp.com/analytics/specificdelete`

## Get Distinct API
From this `POST` you will get distinct number of `what` from `how` condition

post:- `https://cbkm-analytics-services.herokuapp.com/analytics/distinct`

`what` contains `name,action,stamp`
`how` contains `specific condition` 
>Note :- How is object
#### example
```
{
	what:'name',
	how:{
			action:'my-action'
		}
	
}
```
we will get distinct name whose action is `my-action`


>Created By :-
>Rajaram
>CBKM



