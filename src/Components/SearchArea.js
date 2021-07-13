import React, { Component } from 'react';

export default function SearchArea(){
    return(
        <div style={{width: '500px', marginLeft: '100px'}}>
        <h2>What do you want to do?</h2>
        <form>
            <div className="form-row">
                <div className="col">
                    <input type="texct" className="form-control" placeholder="Search for ..." />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location"/>
                </div>
            </div>
            <button type="submit" className="btn btn-success mt-2 btn-block">Search</button>
        </form>
        
        </div>
    )
}