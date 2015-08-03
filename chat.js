/**
 * Created by imad on 7/31/2015.
 */

myapp = angular.module('chat',[])
myapp.controller("myctr",function($scope){

    var ws = new WebSocket("ws://localhost:99");
    $scope.send = function(){
        console.log(1111)
        ws.send($scope.in)
        $scope.in=''
    }
    ws.onopen = function()
    {
        console.log("open");
        ws.send("hello1111111");
    };
    ws.onmessage = function(evt)
    {
        console.log(evt.data)
        if ($scope.out == null){
            $scope.out = "llsay"
        }
    };
    ws.onclose = function(evt)
    {
        console.log("WebSocketClosed!");
    };
    ws.onerror = function(evt)
    {
        console.log("WebSocketError!");
    };

})
