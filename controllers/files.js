
// controllers/file.js
exports.install = function () {
	ROUTE('GET /');
	ROUTE('GET /files *Files --> query');
	ROUTE('POST /file/upload/ *Files --> create', ['upload'], 1024 * 100);
	ROUTE('GET /file/details/{id}/ *Files --> read');
	ROUTE('DELETE /file/remove/{id}/ *Files --> remove');
	ROUTE('GET /file/download/{id}/', download);
}

function download(id) {
    var self = this;
    var builder = NOSQL('files').one();

    builder.where('id', id).callback(function (err, response) {
        self.res.file(response.f_path, response.f_name);
    });
}