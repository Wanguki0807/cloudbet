<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BettingTicket extends Model
{
    protected $fillable = [
        'ticket_code',
        'total_odds',
        'stake_amount',
        'potential_win_amount',
        'games',
        'status',
        'expires_at'
    ];
    protected $casts = [
        'games' => 'array',
        'expires_at' =>'datetime'
    ];
}
