using Microsoft.EntityFrameworkCore.Migrations;

namespace CIM.DAL.Migrations
{
    public partial class seedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Country",
                columns: new[] { "ID", "CountryName" },
                values: new object[] { 1, "Bangladesh" });

            migrationBuilder.InsertData(
                table: "Country",
                columns: new[] { "ID", "CountryName" },
                values: new object[] { 2, "UK" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Country",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Country",
                keyColumn: "ID",
                keyValue: 2);
        }
    }
}
