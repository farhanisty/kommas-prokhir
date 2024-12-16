import FootBar from "./../components/FootBar.jsx";
import HeaderTitle from "./../components/HeaderTitle.jsx";
import SearchBar from "./../components/SearchBar.jsx";
import MainLayout from "./../layouts/MainLayout.jsx";

export default function Order() {
  return (
    <>
      <MainLayout>
        <HeaderTitle>Daftar Pelanggan</HeaderTitle>
        <SearchBar></SearchBar>
      </MainLayout>
      <FootBar />
    </>
  );
}
