/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {

           initialize: function() {
               this.bindEvents();
           },

           bindEvents: function() {
               var takePhoto = document.getElementById('takePhoto');
               takePhoto.addEventListener('click', app.takePhoto, false);
           },

           // deviceready Event Handler
           //
           // The scope of 'this' is the event. In order to call the 'receivedEvent'
           // function, we must explicitly call 'app.receivedEvent(...);'
           onDeviceReady: function() {
               app.receivedEvent('deviceready');
           },
           // Update DOM on a Received Event
           receivedEvent: function(id) {
               var parentElement = document.getElementById(id);
               var listeningElement = parentElement.querySelector('.listening');
               var receivedElement = parentElement.querySelector('.received');

               listeningElement.setAttribute('style', 'display:none;');
               receivedElement.setAttribute('style', 'display:block;');

               console.log('Received Event: ' + id);
               app.onBatteryReady();
           },

           takePhoto: function(){
               navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20,
                   allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
           },

           onPhotoDataSuccess: function(imageData) {

             var photo = document.getElementById('photo');

             photo.style.display = 'block';

             photo.src = "data:image/jpeg;base64," + imageData;


           },

           onFail: function(message) {
             alert('Failed because: ' + message);
           }

       };
