// Simpan Profil
function simpanProfil() {
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const kelas = document.getElementById("kelas").value;
    const mataKuliah = document.getElementById("mataKuliah").value;
    const dosen = document.getElementById("dosen").value;

    const profilHTML = `
        <h3>Data Profil:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Kelas:</strong> ${kelas}</p>
        <p><strong>Mata Kuliah:</strong> ${mataKuliah}</p>
        <p><strong>Dosen Pengampu:</strong> ${dosen}</p>
    `;

    document.getElementById("profilDisplay").innerHTML = profilHTML;
    document.getElementById("profilForm").reset();
}

// Upload File (Sementara hanya tampil di daftar, tanpa server)
function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const li = document.createElement("li");
        li.innerHTML = `
            ${file.name} 
            <button onclick="hapusFile(this)">Hapus</button>
        `;
        fileList.appendChild(li);
    }

    fileInput.value = "";  // Reset input setelah upload
}

// Hapus File dari List
function hapusFile(button) {
    const li = button.parentElement;
    li.remove();
}