<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sport_type');
            $table->timestamps();
        });

        Schema::create('betting_ticket_game', function (Blueprint $table) {
            $table->id();
            $table->foreignId('betting_ticket_id')->constrained('betting_tickets')->onDelete('cascade');
            $table->foreignId('game_id')->constrained('games')->onDelete('cascade');
            $table->decimal('odds', 10, 2);
            $table->string('market_type');
            $table->enum('status',['ongoing','finished','not_started'])->default('not_started');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
        Schema::dropIfExists('betting_ticket_game');
    }
};
