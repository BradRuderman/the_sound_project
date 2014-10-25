Template.upload.events = {
    'dragenter .drop-zone': function (e, t) {
        e.stopPropagation();
        e.preventDefault();
        $(t.find('drop-zone')).addClass('drop-zone-hover');
    },
    'dragexit .drop-zone': function (e, t) {
        e.stopPropagation();
        e.preventDefault();
        $(t.find('drop-zone')).removeClass('drop-zone-hover');
    },
    'dragover .drop-zone': function (e, t) {
        e.stopPropagation();
        e.preventDefault();
    },
    'drop .drop-zone': function (e, t) {
        e.stopPropagation();
        e.preventDefault();
        FS.Utility.eachFile(event, function(file) {
          SoundFiles.insert(file, function (err, fileObj) {
            console.log(err);
            //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            console.log(fileObj);
          });
        });
    }
};
