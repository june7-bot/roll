// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Dog {
    struct Student {
        string buyerInfo;
        string dogInfo; 
        string dogNose; 
    }

    mapping(uint256 => Student ) Info;

    function setInfo ( uint _dogId, string  memory _buyerInfo, string  memory _dogInfo, string  memory _dogNose ) public{
        Student storage student = Info[_dogId];
        
        student.buyerInfo = _buyerInfo;
        student.dogInfo = _dogInfo;
        student.dogNose = _dogNose;
        
    }

    function getInfo(uint256 _dogId) public view returns (string  memory buyerInfo , string  memory dogInfo , string  memory dogNose ){
        return( Info[_dogId].buyerInfo,  Info[_dogId].dogInfo,  Info[_dogId].dogNose );
    }
}